"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "next-themes";
import { cloneElement, useCallback, useRef, useState, useSyncExternalStore } from "react";
import { GitHubCalendar, type Activity as ContributionDay } from "react-github-calendar";
import "react-github-calendar/tooltips.css";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { revealTransition } from "@/components/ui/motion";
import { activity, activityCalendarTheme } from "@/data/site";

// Theme is only known in the browser; wait until after hydration before
// passing colorScheme so the calendar doesn't mismatch the server render.
const subscribe = () => () => {};
const useIsMounted = () =>
  useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

function formatTooltip(day: { date: string; count: number }) {
  return activity.tooltipLabel
    .replace("{{count}}", String(day.count))
    .replace("{{date}}", day.date);
}

function formatTodayIso(now: Date) {
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

export function Activity() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();
  const reduceMotion = useReducedMotion();
  const colorScheme = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const todayAccent = activityCalendarTheme[colorScheme][1];
  // Only read the clock after mount so prerender never evaluates `new Date()`.
  const today = mounted ? formatTodayIso(new Date()) : null;

  const [total, setTotal] = useState<number | null>(null);
  const totalRef = useRef<number | null>(null);

  // Sum counts for the big number; defer setState so we don't update during the calendar's render.
  const transformData = useCallback((days: ContributionDay[]) => {
    const sum = days.reduce((acc, day) => acc + day.count, 0);
    if (totalRef.current !== sum) {
      totalRef.current = sum;
      Promise.resolve().then(() => setTotal(sum));
    }
    return days;
  }, []);

  return (
    <section id="activity" aria-labelledby="activity-heading" className="container-page py-16 md:py-24">
      <SectionHeading section="activity" />

      <div className="mt-12 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-8 md:items-end">
        <div className="flex flex-col gap-6 md:col-span-3">
          <p className="max-w-sm text-muted">{activity.intro}</p>

          <div>
            <p className="font-mono text-title tabular-nums tracking-tight text-text md:text-heading">
              {total === null ? "—" : total.toLocaleString()}
            </p>
            <p className="mt-2 font-mono text-xs text-muted">{activity.totalCaption}</p>
          </div>

          <a
            href={activity.profileHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit font-mono text-xs text-muted underline decoration-border underline-offset-4 transition-colors duration-200 hover:text-accent hover:decoration-accent"
          >
            {activity.profileLabel}
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={revealTransition}
          className="overflow-x-auto text-muted md:col-span-9 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {mounted ? (
            <GitHubCalendar
              username={activity.username}
              year="last"
              colorScheme={colorScheme}
              theme={activityCalendarTheme}
              showTotalCount={false}
              transformData={transformData}
              errorMessage={activity.errorMessage}
              blockSize={12}
              blockMargin={4}
              blockRadius={2}
              fontSize={12}
              tooltips={{
                activity: { text: formatTooltip },
              }}
              renderBlock={(block, day) => {
                if (!today || day.date !== today) return block;
                return cloneElement(block, {
                  style: {
                    ...block.props.style,
                    stroke: todayAccent,
                    strokeWidth: 2,
                  },
                });
              }}
            />
          ) : (
            <div
              className="h-[130px] w-full animate-pulse rounded-card border border-border bg-surface"
              aria-hidden="true"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
