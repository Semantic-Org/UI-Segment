
Package.describe({
  name    : 'semantic:ui-segment',
  summary : 'Semantic UI - Segment: Single component release',
  version : '2.1.7',
  git     : 'git://github.com/Semantic-Org/UI-Segment.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'segment.css'
  ], 'client');
});
