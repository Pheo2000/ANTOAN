import React from "react";

const NotFound: React.VFC = () => {
  return (
    <section className={"py-5 px-5 sm:px-20"}>
      <div>
        <p className={"text-2xl font-medium"}>404 Not Found</p>

        <p className={"mt-5 font-medium"}>
          お探しのページが見つかりません。
          <br />
          一時的にアクセスできない状況にあるか、移転、もしくは削除された可能性があります。
        </p>
      </div>
    </section>
  );
};

export default NotFound;
