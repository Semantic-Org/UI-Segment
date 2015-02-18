var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-segment',
  summary : 'Semantic UI - Segment (official): Single component release of segment',
  version : '1.9.9',
  git     : 'git://github.com/Semantic-Org/UI-Segment.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
