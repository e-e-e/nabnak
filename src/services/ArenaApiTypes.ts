export type UserApiType = {
  id: number; //	(Integer)	The internal ID of the user
  slug: string; //	(String)	The slug of the user. This is used for the user's default profile channel
  username: string; //	(String)	Currently this will be equivalent to "full_name"
  first_name: string; // (String)	The first name of the user
  last_name: string; //	(String)	The last name of the user
  avatar: string; // (String)	The gravatar URL to the user's avatar
  channel_count: number; //	(Integer)	The number of channels the user owns or is a collaborator on
  following_count: number; //	(Integer)	The number of channels and users a user is following
  profile_id: number; //	(Integer)	The internal ID of the user's profile channel
  follower_count: number; //	(String)	The number of users following the user
  class: 'User'; //	(String)	Will always be "User"
  initials: string; //	(String)	The initials of a user. Derived from the user's first and last name
};

export type MeApiResponse = UserApiType & {
  avatar_image: {
    display: string;
    thumb: string;
  };
  can_index: boolean;
  badge: null;
  created_at: string;
  is_confirmed: boolean;
  is_exceeding_private_connections_limit: boolean;
  is_lifetime_premium: boolean;
  is_pending_confirmation: boolean;
  is_pending_reconfirmation: boolean;
  is_premium: boolean;
  is_supporter: boolean;
  metadata: { description: null | string };
  channels: ReadonlyArray<ChannelApiType>;
};

export type BlockApiType = {
  id: number; //	(Integer)	The internal ID of the block
  title: string | null; //	(String, can be null)	The title of the block
  updated_at: string; //	(Timestamp)	Timestamp when the block was last updated
  created_at: string; //	(Timestamp)	Timestamp when the block was created
  state: 'Available' | 'Failure' | 'Processed' | 'Processing'; // (String)	Represents the state of the blocks processing lifecycle (this will most often "Available" but can also be "Failure", "Processed", "Processing")
  comment_count: number; //	(Integer)	The number of comments on a block
  generated_title: string; //	(String)	If the title is present on the block, this will be identical to the title. Otherwise it will be a truncated string of the *description* or *content*. If neither of those are present, it will be "Untitled"
  class: 'Image' | 'Text' | 'Link' | 'Media' | 'Attachment'; //	(String)	The type of block. Can be "Image", "Text", "Link", "Media", or "Attachment"
  base_class: 'Block'; //	(String)	This will always be "Block"
  content: string | null; //(String, can be null)	If the block is of class "Text", this will be the text content as markdown
  content_html: string | null; //	(String, can be null)	If the block is of class "Text", this will be the text content as HTML
  description: string | null; //	(String, can be null)	This is used for captioning any type of block. Returns markdown.
  description_html: string | null; // (String, can be null)	This is used for captioning any type of block. Returns HTML
  source: {
    url: string; //	(String) The url of the source
    provider: {
      name: string;
      url: string;
    } | null; //	(Hash)	A hash of more info about the provider name: (String) The name of the source provider url: (String) The hostname of the source provider
  } | null;
  image: {
    filename: string; //	(String)	Name of the file as it appears on the Arena filesystem
    content_type: string; //	(String)	MIME type of the image (e.g. 'image/png')
    updated_at: string; //(Timestamp)	Timestamp of the last time the file was updated
    thumb: string; // (Hash)	Only contains url which is a URL of the thumbnail sized image (200x200)
    display: string; //(Hash)	Only contains url which is a URL of the display sized image (same aspect ratio as original image but with a maximim width of 600px or a maximum height of 600px, whichever comes first)
    original: string; //	(Hash)	Contains url which is a URL of the original image as well file_size (an integer representation in bytes) and file_size_display (a nicer string representation of the file_size)
  } | null;
  user: string; //	(Hash)	Representation of the author of the block
  connections: string[]; //	(Array)	An array of hash representations of each of the channels the block appears in
};

export type ConnectionInfoApiType = {
  position: number; //	(Integer)	The position of the block inside the channel (as determined by the channel's author and collaborators)
  selected: boolean; //	(Boolean)	Block is marked as selected inside the channel (this is an initial attempt to allow users to "feature" some content over others, can be used for moderation, introduction text, etc)
  connected_at: string; //	(Timestamp)	Time when block was connected to the channel (if the block was created at the same time as the channel this will be identical to created_at)
  connected_by_user_id: number; //	(Integer)	ID of the user who connected the block to the channel (if the block was not reused by another user, this will be identical to user_id)
};

export type ChannelApiType = {
  id: number; //	(Integer)	The internal ID of the channel
  title: string; //	(String)	The title of the channel
  created_at: string; //	(Timestamp)	Timestamp when the channel was created
  updated_at: string; //	(Timestamp)	Timestamp when the channel was last updated
  published: boolean; //	(Boolean)	If channel is visible to all members of arena or not
  open: boolean; //	(Boolean)	If channel is open to other members of arena for adding blocks
  collaboration: boolean; //	(Boolean)	If the channel has collaborators or not
  slug: string; //	(String)	The slug of the channel used in the url (e.g. http://are.na/arena-influences)
  length: string; //	(Integer)	The number of items in a channel (blocks and other channels)
  kind: 'default' | 'profile'; //	(String)	Can be either "default" (a standard channel) or "profile" the default channel of a user
  status: 'private' | 'public' | 'closed'; //	(String)	Can be "private" (only open for reading and adding to the channel by channel author and collaborators), "closed" (open for reading by everyone, only channel author and collaborators can add) or "public" (everyone can read and add to the channel)
  user_id: number; //	(Integer)	Internal ID of the channel author
  class: 'Channel'; //	(String)	Will always be "Channel"
  base_class: 'Channel'; //	(String)	Will always be "Channel"
  user: string; //	(Hash)	More information on the channel author. Contains id, slug, first_name, last_name, full_name, avatar, email, channel_count, following_count, follower_count, and profile_id
  total_pages: number; //	(Integer)	If pagination is used, how many total pages there are in your request
  current_page: number; //	(Integer)	If pagination is used, page requested
  per: number; //	(Integer)	If pagination is used, items per page requested
  follower_count: number; //	(Integer)	Number of followers the channel has
  contents: ReadonlyArray<
    (BlockApiType | ChannelApiType) & ConnectionInfoApiType
    > | null; // (Array, can be null)	Array of blocks and other channels in the channel. Note: If the request is authenticated, this will include any private channels included in the requested channel that you have access to. If not, only public channels included in the requested channel will be shown.
  collaborators: ReadonlyArray<UserApiType> | null; //	(Array, can be null)
};


export type ConnectionApiType = (BlockApiType | ChannelApiType) &
  ConnectionInfoApiType;

export type PaginationAttributes = {
  per?: number;
  page?: number;
};
