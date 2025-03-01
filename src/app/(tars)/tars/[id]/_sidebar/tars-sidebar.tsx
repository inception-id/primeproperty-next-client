import TarsSidebarChatRooms from "./tars-sidebar-chat-rooms";
import TarsSidebarHead from "./tars-sidebar-head";

const TarsSidebar = () => {
  return (
    <aside className="md:w-60 md:border-r flex-2 overflow-y-auto md:overflow-y-hidden flex flex-col h-full md:h-screen">
      <TarsSidebarHead />
      <TarsSidebarChatRooms />
    </aside>
  );
};
export default TarsSidebar;
