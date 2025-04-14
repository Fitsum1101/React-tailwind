import React, { use } from "react";
import Profile from "../Blog/Profile";
import Image1 from "../../images/person1.png";
import Image2 from "../../images/person2.png";
import Image3 from "../../images/person3.png";
import Image4 from "../../images/person4.png";
import Image5 from "../../images/person5.png";
import Image6 from "../../images/person2.png";
import Image7 from "../../images/person7.png";
import Image8 from "../../images/person8.png";

const Collection = () => {
  const MYdata = [
    {
      image: Image1,
      fullname: "arthur melo",
      postion: "design director",
    },
    {
      image: Image2,
      fullname: "Amelia. Anderson",
      postion: "Lead Developer",
    },
    {
      image: Image3,
      fullname: "Olivia Wathan",
      postion: "Lead designer",
    },
    {
      image: Image4,
      fullname: "John Doe",
      postion: "Full stack developer",
    },
    {
      image: Image5,
      fullname: "Mia",
      postion: "Graphic Designer",
    },
    {
      image: Image6,
      fullname: "Junior REIS",
      postion: "Products Managers",
    },
    {
      image: Image7,
      fullname: "Joseph Gonzalez",
      postion: "Software engineer",
    },
    {
      image: Image8,
      fullname: "Emma Doe",
      postion: "Content Writer",
    },
  ];
  // w-[1206px]
  return (
    <div className=" grid grid-col-1 m-4 sm:grid-cols-2 gap-3 md:grid-cols-4 ">
      {MYdata.map((user, i) => (
        <Profile
          key={i}
          image={user.image}
          fullName={user.fullname}
          postion={user.postion}
        />
      ))}
    </div>
  );
};

export default Collection;
