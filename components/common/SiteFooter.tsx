export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl md:grid grid-cols-3 gap-4 p-4 ">
        <div>
          <div className="text-lg font-bold">More from AIS</div>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Events</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
