async function run(fn: () => Promise<number>): Promise<void> {
    try {
        const code = await fn();
        if (typeof code === 'number') process.exitCode = code;
    } catch (error) {
        console.error('Error:', error);
        process.exitCode = 1;
    }
}

module.exports = run;