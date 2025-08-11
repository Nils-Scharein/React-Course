import '@/theme/colorTheme.css';
import { useTheme } from '@/context/Theme/UseTheme'; // Import the custom theme hook

// Define optional props for the component
type ThemeToggleButtonProps = {
  className?: string;
};

// Functional component for the theme toggle button
const ThemeToggleButton = ({ className }: ThemeToggleButtonProps) => {
  // Destructure theme and toggleTheme function from the context
  const { theme, toggleTheme } = useTheme();

  return (
    // Wrapper <div> with optional className for styling
    <div className={className}>
      {/* Button that toggles the theme when clicked */}
      <button onClick={toggleTheme}>
        {/* Display different text and emoji based on current theme */}
        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggleButton; // Export the component so it can be used in other files
