#!/usr/bin/env node
const chalk = require("chalk"); // package for colors
const boxen = require("boxen");

// Text + chalk definitions
const data = {
	name: chalk.white("Zena Alsibaai"),
	handle: chalk.white("Zena"),
	npm: chalk.gray("https://www.npmjs.com/") + chalk.red("~zena.alsibaai"),
	github: chalk.gray("https://github.com/") + chalk.green("Zena-Alsibaai"),
	linkedin:
		chalk.gray("https://www.linkedin.com/in/") + chalk.blue("zena-alsibaai/"),
	web: chalk.cyan("https://zena-alsibaai.github.io/Semaine-07/"),
	npx: chalk.red("npx") + " " + chalk.white("Zena"),
	labelNpm: chalk.white.bold("        npm:"),
	labelGitHub: chalk.white.bold("     GitHub:"),
	labelLinkedIn: chalk.white.bold("   LinkedIn:"),
	labelWeb: chalk.white.bold("        Web:"),
	labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
	chalk.green(
		boxen(
			[
				`${data.name} / ${data.handle}`,
				EMPTYLINE,
				`${data.labelNpm} ${data.npm}`,
				`${data.labelGitHub} ${data.github}`,
				`${data.labelLinkedIn} ${data.linkedin}`,
				`${data.labelWeb} ${data.web}`,
				EMPTYLINE,
				`${data.labelCard} ${data.npx}`,
			].join(NEWLINE),
			{
				padding: 1,
				margin: 1,
				borderStyle: "round",
				align: "center",
			}
		)
	)
);
