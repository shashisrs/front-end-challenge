import React from "react";
import iIcon from "../assets/i.png";
import AssetVideoContainer from "./AssetVideoContainer";
import AssetThreadbuilder from "./AssetThreadbuilder";
import InputAssetArticle from "./InputAssetArticle";
import DisplayAssetArticle from "./DisplayAssetArticle";
const AssetContainerTemplate = ({ assets }) => {
  return (
    <div className="flex flex-wrap gap-16 justify-center">
      {assets.map((item, index) => {
        return (
          <div className="w-[100%] md:w-[45%] max-w-[480px] object-contain max-h-[580px] h-[580px]  border shadow-xl rounded-lg">
            <div className="bg-black text-white rounded-t-lg flex justify-between p-3 items-center">
              <div></div>
              {item.asset_title}
              <div>
                <img src={iIcon} alt="iIcon" />
              </div>
            </div>

            <div  className="w-[100%] flex flex-col">
              <div className="px-2 py-6 text-sm border border-b-2">
                <span className="font-semibold text-base">Description:</span>{" "}
                {item.asset_description}
              </div>
              <div>
                {item.asset_content_type === "video" ? (
                 <AssetVideoContainer content={item.asset_content}/>
                ) : item.asset_content_type === "threadbuilder" ? (
                  <AssetThreadbuilder />
                ) : item.asset_type === "input_asset" &&
                  item.asset_content_type === "article" ? (
                  <InputAssetArticle />
                ) : item.asset_type === "display_asset" &&
                  item.asset_content_type === "article" ? (
                  <DisplayAssetArticle content={item.asset_content}/>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AssetContainerTemplate;
