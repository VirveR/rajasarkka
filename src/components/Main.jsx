function Main() {
    return (
        <main className="column">

            <div className="row">
                <div className="column left">
                    <img id="selfie" src="/src/assets/me.png" alt="it's me" />
                </div>
                <div className="column right">
                    <h2>Virve Rajasärkkä</h2>
                    <h3>Full-Stack Developer</h3>
                    <p>Bachelor’s Degree IT student. Creative and curious. Organized
                        and precise. Broad scale systemicthinker. Likes to optimize. Able
                        and willing to learn anything.
                    </p>
                    <p>Residing in Pirkanmaa countryside. Willing to work from home
                        or hybrid in Tampere or Helsinki.
                    </p>
                    <h4>Learn more</h4>
                    <p>Email: <a href="mailto:virve.rajasarkka@hotmail.fi">virve.rajasarkka@hotmail.fi</a></p>
                    <p>GitHub: <a href="https://github.com/VirveR">VirveR</a></p>
                </div>
            </div>
            <div className="row">
                <div className="column full">
                    <h3>Tech skills</h3>
                    <h4>Web Development</h4>
                    <p>HTML - CSS - PHP - JavaScript - NodeJs -
                        React - APIs - UI/UX Design - Accessibility
                    </p>

                    <h4>Databases</h4>
                    <p>MySql - PHPmyAdmin - MongoDB - PostgreSQL</p>

                    <h4>Programming</h4>
                    <p>Python - Java - VScode</p>

                    <h4>Project Work</h4>
                    <p>Scrum - Jira - Confluence - Kanban - Figma</p>

                    <h4>Big Data</h4>
                    <p>Python Pandas, Numpy, MatPlotLib - Machine learning - NLP - Power BI</p>

                    <h4>Automation</h4>
                    <p>RPA - UIPath - Robot Framework - Power Automate</p>
                </div>
            </div>
            <div className="row">
                <img id="code" src="src/assets/vscode.png" alt="web project on screen" />
            </div>
        </main>
    );
}

export default Main;