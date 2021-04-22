import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";



export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>Recent Projects</h1>
          <div className="projects-container">
            <div className="project">
              <a href="https://rafaflix.com" target="_blank">
                <img src="/images/rafaflix.png" alt="netflix clone" />
                <h4>Rafaflix</h4>
              </a>
            </div>
            <div className="project">
              <a href="https://rafachess.xyz" target="_blank">
                <img src="/images/rafachess.png" />
                <h4>Rafachess</h4>
              </a>
            </div>
            <div className="project">
              <a href="http://3.14.10.124/" target="_blank">
                <img src="/images/rafascode.png" />
                <h4>RafaSCode</h4>
              </a>
            </div>
          </div>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
          text-align: center;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }

        h4 {
          text-align: center;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        .projects-container {
          margin-top: 2rem;
        }

        .project {
          display: inline-block;
          margin: 0 1rem;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
}
