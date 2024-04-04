import Messages from "../Messages";
import Posts from "../Posts";
import RightSide from "./RightSide";

export default function RightSideContainer() {
  return (<>
    <RightSide title="Thread" subTitle="General">
      {/* <Messages /> */}
      <Posts />
    </RightSide>
  </>);
}