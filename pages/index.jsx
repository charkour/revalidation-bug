import { REVALIDATE_EVERY_MINUTE } from "const";

export const getStaticProps = async (context) => {
    const timestamp = new Date().toISOString();
    console.log('rendered at', timestamp);
    return { props: { timestamp }, revalidate: REVALIDATE_EVERY_MINUTE };
};

const Index = ({ timestamp }) => {
    return <div>rendered at {timestamp}</div>;
};

export default Index;
