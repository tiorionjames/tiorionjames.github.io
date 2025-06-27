import React from 'react';

export default function Projects() {
  return (
    <main className="main-content">
      <section>
        <h1>My Projects</h1>
        <h2>Coming Soon:</h2>
        <ul>
          <li>
            <strong>Barter Buddy</strong> — A small social media platform to connect users for skill-sharing.
          </li>
          <li>
            <strong>DewList</strong> — A task manager focused on simplicity and productivity.
          </li>
        </ul>
      </section>

      <section className="projects-list">
        <h2>Completed Projects</h2>
        <ul>
          <li>
            <a
              href="https://github.com/tiorionjames/sarcasticast/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>SarcastiCast</strong>: A snarky weather app that delivers your local forecast with a dose of attitude.
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tiorionjames/fsf-4-blog-app/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Basic Blog App</strong>: A simple blogging platform where users can post and edit content.
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tiorionjames/"
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My GitHub Repository
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
