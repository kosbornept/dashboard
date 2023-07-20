import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens
export const tokens = (mode) => ({
    ...(mode === 'dark'
    ? {
        grey: {
            100: "#cfd1d2",
            200: "#9fa2a6",
            300: "#6e7479",
            400: "#3e454d",
            500: "#0e1720",
            600: "#0b121a",
            700: "#080e13",
            800: "#06090d",
            900: "#030506"
        },
        primary: {
            100: "#d0d1d5",
            200: "#a1a4ab",
            300: "#727681",
            400: "#1F2A40",
            500: "#141b2d",
            600: "#101624",
            700: "#0c101b",
            800: "#080b12",
            900: "#040509"
        },
        greenAccent: {
            100: "#f8fbff",
            200: "#f1f8ff",
            300: "#eaf4ff",
            400: "#e3f1ff",
            500: "#dcedff",
            600: "#b0becc",
            700: "#848e99",
            800: "#585f66",
            900: "#2c2f33"
        },
        redAccent: {
            100: "#f8dcdb",
            200: "#f1b9b7",
            300: "#e99592",
            400: "#e2726e",
            500: "#db4f4a",
            600: "#af3f3b",
            700: "#832f2c",
            800: "#58201e",
            900: "#2c100f"
        },
        blueAccent: {
            100: "#f1f8ff",
            200: "#e3f1ff",
            300: "#d4eaff",
            400: "#c6e3ff",
            500: "#b8dcff",
            600: "#93b0cc",
            700: "#6e8499",
            800: "#4a5866",
            900: "#252c33"
        }
    } : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0"
        },
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#141b2d",
            600: "#434957",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5"
        },
        greenAccent: {
            100: "#0f2922",
            200: "#1e5245",
            300: "#2e7c67",
            400: "#3da58a",
            500: "#2e7c67",
            600: "#3da58a",
            700: "#94e2cd",
            800: "#b7ebde",
            900: "#94e2cd"
        },
        redAccent: {
            100: "#2c100f",
            200: "#58201e",
            300: "#832f2c",
            400: "#af3f3b",
            500: "#db4f4a",
            600: "#e2726e",
            700: "#e99592",
            800: "#f1b9b7",
            900: "#f8dcdb"
        },
        blueAccent: {
            100: "#151632",
            200: "#2a2d64",
            300: "#3e4396",
            400: "#535ac8",
            500: "#6870fa",
            600: "#868dfb",
            700: "#a4a9fc",
            800: "#868dfb",
            900: "#e1e2fe"
        }
    })
})

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
            ? {
                primary: {
                    main: colors.primary[500],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: colors.primary[500],
                }
            } : {
                primary: {
                    main: colors.primary[300],
                },
                secondary: {
                    main: colors.greenAccent[300],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100],
                },
                background: {
                    default: "#fcfcfc",
                }
            })
        },
        typography: {
            fontFamily: ["'Source Sans 3'", "sans-serif"].join(", "),
            fontSize: 12,
            h1: {
                fontFamily: ["'Source Sans 3'", "sans-serif"].join(", "),
                fontSize: 40
            },
            h2: {
                fontFamily: ["'Source Sans 3'", "sans-serif"].join(", "),
                fontSize: 32
            },
            h3: {
                fontFamily: ["'Source Sans 3'", "sans-serif"].join(", "),
                fontSize: 24
            },
            h4: {
                fontFamily: ["'Source Sans 3'", "sans-serif"].join(", "),
                fontSize: 20
            },
            h5: {
                fontFamily: ["'Source Sans 3'", "sans-serif"].join(", "),
                fontSize: 16
            },
            h6: {
                fontFamily: ["'Source Sans 3'", "sans-serif"].join(", "),
                fontSize: 14
            },
        }
    }
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode];
}

