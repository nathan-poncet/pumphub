/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Activities = "activities",
	Categories = "categories",
	Comments = "comments",
	Posts = "posts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ActivitiesRecord<Ti18n = unknown> = {
	title?: string
	i18n?: null | Ti18n
	image?: string
	active?: boolean
	category?: RecordIdString
}

export type CategoriesRecord<Ti18n = unknown> = {
	title?: string
	i18n?: null | Ti18n
	image?: string
	active?: boolean
}

export type CommentsRecord = {
	user?: RecordIdString
	post?: RecordIdString
	value?: HTMLString
}

export type PostsRecord = {
	title?: string
	description?: HTMLString
	images?: string[]
	active?: boolean
	activity?: RecordIdString
}

export enum UsersLanguagesOptions {
	"en" = "en",
	"fr" = "fr",
	"de" = "de",
	"it" = "it",
}
export type UsersRecord = {
	name?: string
	avatar?: string
	languages?: UsersLanguagesOptions[]
}

// Response types include system fields and match responses from the PocketBase API
export type ActivitiesResponse<Ti18n = unknown, Texpand = unknown> = ActivitiesRecord<Ti18n> & BaseSystemFields<Texpand>
export type CategoriesResponse<Ti18n = unknown> = CategoriesRecord<Ti18n> & BaseSystemFields
export type CommentsResponse<Texpand = unknown> = CommentsRecord & BaseSystemFields<Texpand>
export type PostsResponse<Texpand = unknown> = PostsRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	activities: ActivitiesRecord
	categories: CategoriesRecord
	comments: CommentsRecord
	posts: PostsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	activities: ActivitiesResponse
	categories: CategoriesResponse
	comments: CommentsResponse
	posts: PostsResponse
	users: UsersResponse
}