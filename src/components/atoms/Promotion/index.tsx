'use client'
import React from "react";
import { MainButton } from "@/components/atoms";
import { ArrowRightIcon, CloseIcon } from "@/components/atoms/Icons";

export const PromotionRow = () => {
    return (
        <div className="bg-[#FFDA6E] md:h-[52px] h-[100px] w-full flex justify-center items-center sm:justify-col">
            <div className="flex items-center justify-between md:w-2/3 w-full flex-col md:flex-row">
                <div className="flex flex-row">
                    <div className="text-red font-bold text-xs sm:text-md">
                        Renew, Refresh{" "}
                        <span className="text-black text-xs sm:text-md">24!</span>
                    </div>
                    <div className="divide-[#B0B0B0]"></div>
                    <div className="text-black font-medium text-xs sm:text-md">
                        Save up to 40%! Hurry, offer ends June 15th.
                    </div>
                </div>

                <MainButton
                    label="Claim offer"
                    btnStyle="Primary"
                    btnSize="Small"
                    icon={<ArrowRightIcon color="#ffffff" />}
                // onClick={closeModal}
                />
                <div className="hidden md:visible">
                    <CloseIcon />
                </div>
            </div>
        </div>
    );
};
