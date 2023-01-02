import Link from "next/link";
import React from "react";

const SystemError: React.VFC = () => {
  return (
    <section className={"py-5 px-5 sm:px-20"}>
      <div>
        <p className={"text-2xl font-medium"}>システムエラーが発生しました</p>

        <p className={"mt-5 font-medium"}>
          大変お手数ですが、しばらく経ってから再度お試しいただくようお願いいたします。
          <br />
          繰り返し操作をしても解決しない場合、お手数ですが、アプリ管理者までご連絡ください。
        </p>

        <div className={"mt-5 font-medium text-blue-700"}>
          <Link href={"https://www.matisse.co.jp/"}>
            <a>Matisse Education System</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SystemError;
