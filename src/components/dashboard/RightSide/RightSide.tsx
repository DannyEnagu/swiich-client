import ProfileView from "../ProfileView/ProfileView";
import Thread from "../Thread/Thread";
import withContentWrapper from '../WithContentWrapper';


const ProfileViewWrapper = withContentWrapper(ProfileView);
const ThreadWrapper = withContentWrapper(Thread, true);

interface RightSideProps {
  contentType: string;
}

export default function RightSide({ contentType }: RightSideProps) {

  return (<div className="dashboard-right">
    {contentType === 'thread' && (<ThreadWrapper />)}
    {contentType === 'profile' && (<ProfileViewWrapper />)}
  </div>);
}