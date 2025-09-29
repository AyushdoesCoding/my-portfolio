

function Links() {
return (
    <div className="card">
    <h2>MY LINKS</h2>
      {/* We add a className to the list itself */}<ul className="links-list">
        <li>
          {/* And we add a className to each link to turn it into a button */}
        <a href="https://www.linkedin.com/in/ayush-negi-089001287/" className="link-as-button" target="_blank" rel="noopener noreferrer">LinkedIn
        </a>
        </li>
        <li>
        <a href="https://github.com/AyushdoesCoding" className="link-as-button" target="_blank" rel="noopener noreferrer">GitHub
        </a>
        </li>
        <li>
        <a href="https://x.com/AyushhTweets" className="link-as-button" target="_blank" rel="noopener noreferrer">Twitter
        </a>
        </li>
        <li>
        <a href="https://www.instagram.com/ayushhh__negi/" className="link-as-button" target="_blank" rel="noopener noreferrer">Instagram
        </a>
        </li>
        <li>
        <a href="mailto:Ayushnegi2k05@gmail.com" className="link-as-button" target="_blank" rel="noopener noreferrer">Email Me
            </a>
        </li>
    </ul>
</div>
);
}

export default Links;

