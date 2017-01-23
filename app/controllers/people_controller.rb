class People < ActionController::Base

  # ... Other REST actions

  def create
    person = Person.new(person_params)

    person.set_initial_attributes

    if person.save
      redirect_to person, :notice => "Account added!"
    else
      render :new
    end
  end

  def validateEmail
    user = Person.find_by_slug(params[:slug])

    if user.present?
      user.validate_user
    end
  end

  private
    def person_params
      params.requie(:person).permit(:first_name, :last_name, :email)
    end
end
