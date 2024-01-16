class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :review_text, :rating, :username, :genres, :image_url
  belongs_to :user 
  belongs_to :game
end
 