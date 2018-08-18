const webpackPresets = require('../');

const presetsDir = './tests/presets';

describe('Webpack-Presets-Loader', () => {
  test('signle-config', () => {
    const preset = webpackPresets(presetsDir, { presets: 'analyze' });
    
    expect(preset.mode).toBe('development');
    expect(preset.plugins.length).toBe(1);
  });

  test('multiple-configs', () => {
    const preset = webpackPresets(presetsDir, { presets: ['analyze', 'typescript'] });
    
    expect(preset.mode).toBe('development');
    expect(preset.plugins.length).toBe(2);
    expect(preset.plugins).toContain('analyze');
    expect(preset.plugins).toContain('typescript');
  });
});