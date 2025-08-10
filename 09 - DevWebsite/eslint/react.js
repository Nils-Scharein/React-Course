// react.js
import fs from 'node:fs';
import path from 'node:path';
import importPlugin from 'eslint-plugin-import';
import {fileURLToPath} from 'node:url';

// get all required paths and the Main Root of the Project
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// build zones for the features.
// Dynamic, so every new feature gets added automatic
function featureZones() {
    const featuresDir = path.join(ROOT, 'src', 'features');
    let dirs = [];
    try {
        dirs = fs.readdirSync(featuresDir, {withFileTypes: true})
            .filter((d) => d.isDirectory())
            .map((d) => d.name);
    } catch {
        dirs = [];
    }

    // return the zones for the feature
    return dirs.map((name) => ({
        target: `./src/features/${name}`,
        from: './src/features',
        except: [`./${name}`], // MUST be relative to `from`
    }));
}

// standard rule that we can export into our main eslint.conf.js file
export default [
    {
        plugins: {import: importPlugin},

        // for every file with the following ending (change if needed)
        files: ['**/*.{ts,tsx}'],

        rules: {
            'import/no-restricted-paths': ['error', {
                zones: [
                    // create feature Zones with our function
                    ...featureZones(),

                    // shared folders
                    {target: './src/features', from: './src/app'},

                    {
                        target: [
                            './src/components',
                            './src/hooks',
                            './src/lib',
                            './src/types',
                            './src/utils',
                        ],
                        // app folder
                        from: ['./src/features', './src/app'],
                    },
                ],
            }],
        },
    },
];
