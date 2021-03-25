module.exports = {
    apps: [
        {
            name: "nude_safe_api",
            script: "node",
            watch: false,
            args: "-r tsconfig-paths/register -r ts-node/register ./dist/source/index.js"
        }
    ]
};
