import React, { useEffect, useState } from "react";

const StakeTimerComponent = ({ startDate }) => {
  const currentDate = new Date();
  // console.log(currentDate);
  // console.log(endDate);
  const time = new Date(startDate).getTime();
  const diff = currentDate.getTime() - time;
  console.log(new Date(startDate));

  const [sec, setSec] = useState(
    diff > 0 ? Math.floor((diff % (1000 * 60)) / 1000) : 0
  );
  const [min, setMin] = useState(
    diff > 0 ? Math.floor((diff % (1000 * 3600)) / (1000 * 60)) : 0
  );
  const [hour, setHour] = useState(
    diff > 0 ? Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 3600)) : 0
  );
  const [days, setDays] = useState(
    diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0
  );
  useEffect(() => {
    const myInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const diff = currentTime - time;
      setSec(Math.floor((diff % (1000 * 60)) / 1000));
      setMin(Math.floor((diff % (1000 * 3600)) / (1000 * 60)));
      setHour(Math.floor((diff % (1000 * 3600 * 24)) / (1000 * 60 * 60)));
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [sec, min, hour, days]);

  return (
    <div className="tw-font-bold tw-text-[#F1AC5D]">
      <div className="tw-flex-col tw-items-center ">
        <h3 className="tw-ml-10 tw-font-ChakraPetch tw-text-[#5F483F] tw-font-light-[5]">
          Staked since
        </h3>
        <div className="tw-flex">
          <div className="tw-flex tw-flex-col tw-items-center">
            <div className="tw-text-2xl tw-mr-2">
              {days.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}{" "}
              :
            </div>
            <div className="tw-text-xs">D</div>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-ml-2">
            <div className="tw-text-2xl tw-mr-2">
              {hour.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}{" "}
              :
            </div>
            <div className="tw-text-xs">H</div>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-ml-2">
            <div className="tw-text-2xl tw-mr-2">
              {min.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}{" "}
              :
            </div>
            <div className="tw-text-xs">M</div>
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-ml-2">
            <div className="tw-text-2xl tw-mr-2">
              {sec.toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </div>
            <div className="tw-text-xs">S</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StakeTimerComponent;
