import {classNames} from "shared/lib/classNames/className";
import cls from './ThemeSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/switch-light.svg';
import DarkIcon from 'shared/assets/icons/switch-dark.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";


interface  ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className} : ThemeSwitcherProps ) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cls.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>{theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}</Button>
    );
};

