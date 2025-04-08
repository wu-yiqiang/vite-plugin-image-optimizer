declare const vitePluginImageOptimizer: () => {
    name: string;
    transform(code: string, id: string): Promise<string | undefined>;
};

export { vitePluginImageOptimizer as default };
