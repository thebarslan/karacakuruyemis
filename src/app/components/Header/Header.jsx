import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";
import Notice from "./Notice";

export default function Header() {
      return (
            <>
                  <Notice />
                  <MiddleHeader />
                  <Navbar />
            </>
      )
}