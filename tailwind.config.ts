import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        purple: {
          50: "hsl(270, 100%, 98%)",
          100: "hsl(269, 100%, 95%)",
          200: "hsl(269, 100%, 92%)",
          600: "hsl(266, 83%, 57%)",
          700: "hsl(263, 70%, 50%)",
        },
        blue: {
          400: "hsl(213, 94%, 68%)",
          500: "hsl(217, 91%, 60%)",
          600: "hsl(221, 83%, 53%)",
        },
        teal: {
          500: "hsl(173, 80%, 40%)",
        },
        pink: {
          300: "hsl(322, 100%, 78%)",
        },
        yellow: {
          400: "hsl(54, 91%, 65%)",
        },
        gray: {
          50: "hsl(210, 20%, 98%)",
          100: "hsl(210, 15%, 95%)",
          200: "hsl(210, 12%, 90%)",
          300: "hsl(210, 10%, 80%)",
          400: "hsl(210, 8%, 65%)",
          500: "hsl(210, 7%, 50%)",
          600: "hsl(210, 9%, 35%)",
          700: "hsl(210, 11%, 25%)",
          800: "hsl(210, 13%, 20%)",
          900: "hsl(220, 13%, 18%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
