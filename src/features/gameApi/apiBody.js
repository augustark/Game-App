export const getThisYear = `fields artworks.*, cover.*, created_at, genres.*, hypes, involved_companies.*, name, platforms, rating, release_dates, screenshots.*, storyline, summary, total_rating, url, videos.*;
where videos != null & cover.image_id != null & genres != null & storyline != null & hypes != null & release_dates.date > 1641038401 & total_rating > 80; limit 100;
sort popularity asc;`

export const getPopular = `fields artworks, bundles, category, checksum, collection, cover.*, created_at, first_release_date, follows, game_engines.*,game_modes.*, release_dates, genres.*, involved_companies, hypes, keywords.*, multiplayer_modes, name, parent_game, platforms.*, platforms.platform_logo.*, player_perspectives.*, rating, rating_count, screenshots.*, slug, standalone_expansions, status, storyline, summary, tags, total_rating_count, updated_at, url, version_parent, version_title, videos.*; 
where cover.image_id != null & genres != null & videos != null & first_release_date > 1641023761 & rating > 80; 
limit 100; 
sort popularity asc;`

const today = Math.round(new Date().getTime()/1000);

export const getComingSoon = `fields artworks, bundles, category, checksum, collection, cover.*, created_at, first_release_date, follows, game_engines.*,game_modes.*, release_dates, genres.*, involved_companies, hypes, keywords.*, multiplayer_modes, name, parent_game, platforms.*, platforms.platform_logo.*, player_perspectives.*, rating, rating_count, screenshots.*, slug, standalone_expansions, status, storyline, summary, tags, total_rating_count, updated_at, url, version_parent, version_title, videos.*; 
where cover.image_id != null & genres != null & videos != null & first_release_date > ${String(today)}; 
limit 100; 
sort popularity asc;`

export const getRecentlyReleased = `fields artworks, bundles, category, checksum, collection, cover.*, created_at, first_release_date, follows, game_engines.*,game_modes.*, release_dates, genres.*, involved_companies, hypes, keywords.*, multiplayer_modes, name, parent_game, platforms.*, platforms.platform_logo.*, player_perspectives.*, rating, rating_count, screenshots.*, slug, standalone_expansions, status, storyline, summary, tags, total_rating_count, updated_at, url, version_parent, version_title, videos.*; 
where cover.image_id != null & genres != null & videos != null & first_release_date < ${String(today)}; 
limit 100; 
sort popularity asc;`

