import devOne from "./assets/dev_one.jpg";

const profilePic = {
  imageSrc: devOne,
};

const height = "300px";

function Avatar() {
  return (
    <img
      src={profilePic.imageSrc}
      className="img"
      alt="Developer Avatar"
      height={height}
    ></img>
  );
}

export default Avatar;
