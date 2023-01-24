// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// router page
import { Content0 } from "../router/Content0";
import { Content1 } from "../router/Content1";
import { Content2 } from "../router/Content2";
export const Content = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Content0 />} />
        <Route path="/content1" element={<Content1 />} />
        <Route path="/content2" element={<Content2 />} />
      </Routes>
    </div>
  );
};
