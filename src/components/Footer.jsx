export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white text-center py-4 transition-colors">
      © {new Date().getFullYear()} School App. All rights reserved.
    </footer>
  );
}