import { memo } from 'react';
import {
	createTheme,
	ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';


export const theme = createTheme({
	components: {
		MuiSelect: {
			defaultProps: {
				size: 'medium',
			}
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				size: 'large'
			},
			styleOverrides: {
				sizeLarge: {
					height: '100%',
				}
			},
		}
	},
});

interface ThemeProviderProps {
	children: JSX.Element;
}

export const ThemeProvider = memo((props: ThemeProviderProps) => {
	const { children } = props;
	return <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>;
});
