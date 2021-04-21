#!/usr/bin/env node
const chalk = require("chalk"); // package for colors
const boxen = require("boxen");

// Text + chalk definitions
const data = {
	name: chalk.white(" Zena Alsibaai"),
	handle: chalk.magenta("Zena"),
	npm:
		chalk.cyan("https://www.npmjs.com/") +
		chalk.magentaBright("~zena.alsibaai"),
	github:
		chalk.cyan("https://github.com/") + chalk.magentaBright("Zena-Alsibaai"),
	linkedin:
		chalk.cyan("https://www.linkedin.com/in/") +
		chalk.magentaBright("zena-alsibaai/"),
	web: chalk.cyan("https://zena-alsibaai.github.io/Semaine-07/"),
	npx: chalk.magenta("npx") + " " + chalk.magentaBright("Zena"),
	labelNpm: chalk.white.bold("        npm:"),
	labelGitHub: chalk.white.bold("     GitHub:"),
	labelLinkedIn: chalk.white.bold("   LinkedIn:"),
	labelWeb: chalk.white.bold("        Web:"),
	labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
	chalk.cyanBright(
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
