import React, { lazy, Suspense } from "react";

const InstallPage: React.FC = (props) => {
  return (
    <div className="w-100 leading-12 flex flex-col justify-center items-center h-full p-16">
      <div className="px-2 flex flex-col justify-center leading-loose">
        <p className="text-3xl font-bold text-center mb-8">海豚导单安装教程</p>
        <p>以下是安装 Chrome 或 Edge 的插件的简单指南，咱们一起来搞定它吧！💪</p>
        <p>1️⃣ 首先，你需要下载插件的离线安装文件 haitun.zip，解压成文件包</p>
        <a href={`/download/haitun.zip?${new Date().getTime()}`} className="h-12 rounded-[12px] py-2 px-8 my-4 mx-auto text-white bg-green-500 max-w-60 align-center">
          下载插件
        </a>
        <p>2️⃣ 压缩包解压成文件夹</p>
        <img src="/img/crx-1.png" alt="解压文件包" className="w-full my-4" />
        <p>
          3️⃣ 打开 Chrome 或 Edge 浏览器，进入浏览器设置。在 Chrome 浏览器中，你可以在右上角点击菜单图标，选择“更多工具”，再选择“扩展程序”。在 Edge
          浏览器中，点击右上角菜单图标，选择“扩展”
        </p>
        <p>4️⃣ 在扩展程序页面，打开“开发者模式”。在 Chrome 浏览器中，你需要在右上角开启开发者模式，而在 Edge 浏览器中，该选项位于扩展程序页面的左下角</p>
        <p>5️⃣ 点击 “加载已解压的扩展程序” 选择将解压好的文件包</p>
        <img src="/img/crx-2.png" alt="解压文件包" className="w-full my-4" />
        <p>6️⃣ 会弹出一个提示框，点击“添加扩展程序”进行安装</p>
        <p> 如果该插件需要特殊的权限，你需要在弹出的窗口中确认授权。此时插件已经成功安装了</p>
        <p>⚠️ 如果你之前已经安装过该插件，可能需要先将其卸载，然后再按照上述步骤重新安装</p>
        <p>好了，现在你应该已经成功地安装了 Chrome 或 Edge 的插件了！🎉</p>
        <p>
          下一步就可以开始使用海豚导单进行订单批量导出了， 详见{" "}
          <a className="px-4 py-1 rounded-[4px] text-white bg-red-500" href="/tutorial">
            导出教程
          </a>
        </p>
        <p>如果还有其他问题，欢迎随时联系我😊 WX: bgzdh99 (办公自动化99)</p>
        <img src="/img/wechat.jpg" alt="微信" className="w-48" />
      </div>
    </div>
  );
};

export default InstallPage;
