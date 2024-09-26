import React, { lazy, Suspense } from "react";
import "./index.css";

const TutorialPage: React.FC = (props) => {
  return (
    <div className="main-container first-letter:leading-12 flex flex-col justify-center items-center h-full">
      <div className="px-2 flex flex-col justify-center leading-loose">
        <p className="text-3xl font-bold text-center my-8">海豚导单使用教程</p>
        <p></p>
        <p>
          若插件还没安装，详见{" "}
          <a className="px-4 py-1 rounded-[4px] text-white bg-yellow-500" href="/install">
            安装指南
          </a>{" "}
          先安装插件。
        </p>
        <p>1️⃣ 安装成功后，最好把插件固定在浏览器的工具栏上，方便随时使用。</p>
        <img src="/img/dc-0.jpg" alt="插件固定到工具栏" className="w-1/3 my-4" />
        <p>2️⃣ 插件使用时必须先进入到拼多多商家后台 <b>发货管理-订单查询-待发货</b> 页面</p>
        <img src="/img/dc-1.jpg" alt="进入代发货页面" className="w-3/4 my-4" />
        <p>3️⃣ 用密码登陆账号，无账号请先用手机号注册，有24小时免费试用。</p>
        <img src="/img/dc-3.jpg" alt="手机号注册" className="w-1/2 my-4" />
        <p>3️⃣ 自动解锁功能有风控风险！需要点击确认后才可以使用！</p>
        <img src="/img/dc-4.jpg" alt="自动解锁订单" className="w-3/4 my-4" />
        <p>4️⃣ 直接点击 <b>导出订单</b> 可以一次性导出当页的所有订单，多页订单需要手动翻页后导出。</p>
        <img src="/img/dc-5.jpg" alt="一键导出订单" className="w-3/4 my-4" />
        <p>
          如果还有其他问题，欢迎随时联系我😊 WX: <b>bgzdh99</b> (办公自动化99)
        </p>
        <img src="/img/wechat.jpg" alt="微信" className="w-48" />
      </div>
    </div>
  );
};

export default TutorialPage;
