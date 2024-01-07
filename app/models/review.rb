class Review < ApplicationRecord
  belongs_to :user
  belongs_to :game

  validates :review_text, presence: true
  validates :rating, presence: true

  def review_username
    self.user.username
  end
end
