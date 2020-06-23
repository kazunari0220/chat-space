# README
# chat-space DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|e-mail|string|null: false|
### Association
- has_many :tweets
- has_many :groups, through: :users_groups
- has_many :users_groups

## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text||
|text|text| |
|users_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|title|text|null: false|
### Association
- has_many :users, through: :users_groups
- has_many :tweets
- has_many :users_groups

## users_groupsテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group