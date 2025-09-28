import { ArrowUpRight, ArrowDownRight, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: React.ReactNode;
  variant?: "default" | "gradient" | "glow";
}

export function MetricCard({
  title,
  value,
  change,
  changeLabel,
  icon,
  variant = "default",
}: MetricCardProps) {
  const isPositive = change && change > 0;
  const changeIcon = change ? (
    isPositive ? (
      <ArrowUpRight className="h-4 w-4" />
    ) : (
      <ArrowDownRight className="h-4 w-4" />
    )
  ) : null;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 transition-all duration-300",
        variant === "default" && "metric-card",
        variant === "gradient" && "metric-card-glow",
        variant === "glow" && "metric-card hover-glow"
      )}
    >
      {variant === "gradient" && (
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      )}
      
      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
            
            {change !== undefined && (
              <div className="mt-3 flex items-center gap-1">
                <span
                  className={cn(
                    "flex items-center gap-0.5 text-sm font-medium",
                    isPositive ? "text-success" : "text-destructive"
                  )}
                >
                  {changeIcon}
                  {Math.abs(change)}%
                </span>
                {changeLabel && (
                  <span className="text-sm text-muted-foreground">{changeLabel}</span>
                )}
              </div>
            )}
          </div>
          
          {icon && (
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}