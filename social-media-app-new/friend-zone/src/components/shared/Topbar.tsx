import { Link } from "react-router-dom";
import { Button } from "../ui";
import { LogOut } from "lucide-react";

const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex-between gap-3 items-center">
          <img
            src="/assets/images/logo.png"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>

        <div className="flex gap-4 items-center">
          <Button variant="ghost" className="shad-button_ghost">
            <LogOut color="#a87ba8" />
          </Button>
          <Link to="/profile">
            <img
              src="/assets/images/profile-placeholder.svg"
              className="h-8 w-8"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
