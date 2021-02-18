import ShareImagePage from 'containers/elections/ShareImageContainer';
import tgpApi from 'api/tgpApi';
export default function Candidate({ ssrState }) {
  return <ShareImagePage ssrState={ssrState} />;
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  if (id) {
    const api = tgpApi.newCandidate.find;
    const url = `${api.url}?id=${id}`;
    const res = await fetch(url);
    const candidate = await res.json();
    console.log(candidate);
    return {
      props: {
        ssrState: {
          candidate: candidate.candidate,
        },
      }, // will be passed to the page component as props
    };
  }
  return {
    props: {},
  };
}
