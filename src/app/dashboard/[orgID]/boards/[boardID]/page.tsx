import withContentWrapper from "@/components/dashboard/WithContentWrapper";
import { Content } from "../Components";

const ContentWrapper = withContentWrapper(Content);

export default function Page() {
  return (
    <ContentWrapper />
  );
}