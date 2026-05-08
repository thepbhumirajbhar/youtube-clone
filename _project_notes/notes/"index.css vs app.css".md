- index.css is your global stylesheet that loads Tailwind and applies basic rules to your entire application. Its rules wrap around your entire application.
Tailwind Directives: (e.g., @import "tailwindcss";)
Base Styles: Setting the default font family, background color, or text color for the <body> tag.

- App.css is meant for styling just the App component, but because Tailwind uses utility classes directly inside your JSX, you don't need it at all! 