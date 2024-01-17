class GameSerializer < ActiveModel::Serializer
    attributes :id, :name, :image_url, :genre, :avg_rating
    has_many :users
    has_many :reviews, serializer: ReviewSerializer
end
