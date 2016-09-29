function Tennis(){
  var ScoreA;
  var ScoreB;
  this.start = function(){
    ScoreA = 0;
    ScoreB = 0;
    this.GetScoreA = function(){
      if(ScoreA === 0) ScoreA = 15;
      else if(ScoreA === 15) ScoreA = 30;
      else if(ScoreA === 30) ScoreA = 40;
      else if(ScoreA === 40){
        ScoreA = 0;
        return 'Player A is Winner';
      }
    }
    this.GetScoreB = function(){
      if(ScoreB === 0) ScoreB = 15;
      else if(ScoreB === 15) ScoreB = 30;
      else if(ScoreB === 30) ScoreB = 40;
    }
  };

  this.echo = function(){
    if(ScoreA === 0 && ScoreB === 0) return 'Love - Love';
    else if(ScoreA === 15 && ScoreB === 0) return 'Fifteen - Love';
    else if(ScoreA === 30 && ScoreB === 0) return 'Thirty - Love';
    else if(ScoreA === 40 && ScoreB === 0) return 'Forty - Love';
    else if(ScoreA === 0 && ScoreB === 15) return 'Love - Fifteen';
    else if(ScoreA === 0 && ScoreB === 30) return 'Love - Thirty';
  }

  /*this.echoB = function(){
    if(ScoreB === 15 && ScoreA === 0) return 'Love - Fifteen';
    else if(ScoreB === 30 && ScoreA === 0) return 'Love - Thirty';
    else if(ScoreB === 40 && ScoreA === 0) return 'Love - Forty';

  }*/

  /*this.winner = function(){
    if(ScoreA === 40) return 'Player A is Winner';
  }*/
}

describe('Tennis game' , function() {
  var tennis = new Tennis();

  it('should echo "Love - Love" when start the game',function(){
    tennis.start();
    expect(tennis.echo()).toEqual('Love - Love');
  });

  //--------------------------- Player A -------------------------------------//
  it('should echo "Fifteen - Love" when Player A get score 15',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Fifteen - Love');
  });
  it('should echo "Thirty - Love" when Player A get score 30',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Thirty - Love');
  })
  it('should echo "Forty - Love" when Player A get score 40',function(){
    tennis.GetScoreA();
    expect(tennis.echo()).toEqual('Forty - Love');
  })
  it('should echo "player A is Winner" when Player A get score 40',function(){
    tennis.GetScoreA();
    //expect(tennis.winner()).toEqual('player A is Winner');
  })
  //--------------------------- Player B -------------------------------------//
  it('should echo "Love - Fifteen" when Player B get score 15',function(){
    tennis.GetScoreB();
    expect(tennis.echo()).toEqual('Love - Fifteen');
  });
  it('should echo "Love - Thirty" when Player B get score 15',function(){
    tennis.GetScoreB();
    expect(tennis.echo()).toEqual('Love - Thirty');
  });
});
