import { useState } from "react";
import "../styles/FlexcardStyle.css";
import { LoadingButton } from "./ui/LoadingButton";
import Icon from "../components/Icon";

const options = [
  {
    id: "snow",
    title: "Oretemauw",
    subtitle: "Omuke trughte a otufta",
    image:
      "https://66.media.tumblr.com/8b69cdde47aa952e4176b4200052abf4/tumblr_o51p7mFFF21qho82wo1_1280.jpg",
  },
  {
    id: "tree",
    title: "Iteresuselle",
    subtitle: "Omuke trughte a otufta",
    image:
      "https://66.media.tumblr.com/5af3f8303456e376ceda1517553ba786/tumblr_o4986gakjh1qho82wo1_1280.jpg",
  },
  {
    id: "droplet",
    title: "Idiefe",
    subtitle: "Omuke trughte a otufta",
    image:
      "https://66.media.tumblr.com/5516a22e0cdacaa85311ec3f8fd1e9ef/tumblr_o45jwvdsL11qho82wo1_1280.jpg",
  },
  {
    id: "sun",
    title: "Inatethi",
    subtitle: "Omuke trughte a otufta",
    image:
      "https://66.media.tumblr.com/f19901f50b79604839ca761cd6d74748/tumblr_o65rohhkQL1qho82wo1_1280.jpg",
  },
];

export default function FlexCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="options w-full max-w-7xl px-4 md:px-24">
      {options.map(({ id, title, subtitle, image }, index) => (
        <div
          key={id}
          className={`option ${index === activeIndex ? "active" : ""}`}
          style={{
            ["--optionBackground" as string]: `url(${image})`,
          }}
          role="button"
          tabIndex={0}
          aria-pressed={index === activeIndex}
          onClick={() => setActiveIndex(index)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setActiveIndex(index);
            }
          }}
        >
          <div className="shadow" />
          <div className="label   flex justify-between">
            <div className="info">
              <div className="main">{title}</div>
              <div className="sub">{subtitle}</div>
            </div>
            <LoadingButton>
              Learn more
              <Icon
                name="right"
                variant="cute-regular"
                sizeClass="text-base "
                className="text-base-white whitespace-nowrap"
              />
            </LoadingButton>
          </div>
        </div>
      ))}
    </div>
  );
}
