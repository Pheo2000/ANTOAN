import React from "react";

const NotFound: React.VFC = () => {
  return (
    <section className={"py-5 px-5 sm:px-20"}>
      <div>
        <p className={"text-2xl font-medium"}>404 Not Found</p>

        <p className={"mt-5 font-medium"}>
        Trang bạn đang tìm không thể truy cập.
          <br />
          Nó có thể tạm thời không thể truy cập được, bị di chuyển hoặc bị xóa.
        </p>
      </div>
    </section>
  );
};

export default NotFound;
